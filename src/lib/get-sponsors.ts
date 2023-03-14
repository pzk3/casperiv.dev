/**
 * https://github.com/egoist/website/blob/main/src/lib/get-sponsors.ts
 */

import ronin from "ronin";
import { groupBy } from "lodash-es";

const token = process.env.GITHUB_TOKEN;

if (!token) {
  throw new Error("missing GITHUB_TOKEN in env");
}

interface Node {
  isActive: boolean;
  tier: {
    monthlyPriceInDollars: number;
  };
  sponsorEntity: {
    login: string;
    avatarUrl: string;
    bio?: string;
    description?: string;
  }[];
}

const fetchSponsors = async () => {
  const data = await fetch("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      query: `query {
        viewer {
          sponsorshipsAsMaintainer(first: 100, activeOnly: false) {
            nodes {
              isActive
              tier {
                monthlyPriceInDollars
              }
              sponsorEntity {
                ... on User {
                  login
                  avatarUrl
                  bio
                  name
                }
                ... on Organization {
                  login
                  avatarUrl
                  description
                  name
                }
              }
            }
          }
        }
      }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.data.viewer.sponsorshipsAsMaintainer.nodes as Node[];
    });
  return data;
};

export async function getSponsors() {
  const sponsors = token ? await fetchSponsors() : [];
  const groupedSponsors = groupBy(sponsors, "tier.monthlyPriceInDollars");

  const [githubSponsorsCustomizations] = await ronin<any[]>(
    ({ get }) => get.githubSponsorsCustomizations,
  );

  return {
    githubSponsorsCustomizations,
    tiers: Object.keys(groupedSponsors)
      .map((v) => Number(v))
      .sort((a, b) => (a > b ? -1 : 1))
      .map((key) => {
        return {
          tier: key,

          sponsors: groupedSponsors[key]?.flatMap((item) => {
            return {
              ...item.sponsorEntity,
              isActive: item.isActive,
            };
          }),
        };
      }) as {
      tier: number;
      sponsors: {
        login: string;
        avatarUrl: string;
        bio?: string;
        description?: string;
        isActive: boolean;
        name?: string;
      }[];
    }[],
  };
}
