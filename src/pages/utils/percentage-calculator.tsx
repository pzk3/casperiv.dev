import * as React from "react";
import Head from "next/head";
import mdStyles from "css/utils/md-html.module.scss";
import contactStyles from "css/contact.module.scss";
import Seo from "@components/Seo";

type NumberString = `${number}`;

const PercentageCalculator = () => {
  const [smallestAmount, setSmallAmount] = React.useState<NumberString>("0");
  const [highestAmount, setHighestAmount] = React.useState<NumberString>("0");
  const [result, setResult] = React.useState<NumberString | null>(null);

  const isDisabled = React.useMemo(() => {
    if (!smallestAmount || smallestAmount === "0") return true;
    if (!highestAmount || highestAmount === "0") return true;
    if (parseInt(smallestAmount) > parseInt(highestAmount)) return true;

    return false;
  }, [smallestAmount, highestAmount]);

  function calculate(): NumberString {
    return `${(100 / parseInt(highestAmount)) * parseInt(smallestAmount)}`;
  }

  function resetForm() {
    setSmallAmount("0");
    setHighestAmount("0");
    setResult(null);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setResult(calculate());
  }

  return (
    <div className={mdStyles.mdHtmlContainer}>
      <Seo
        title="Percentage Calculator - Casper Iversen"
        description="Calculate the percentage of 2 numbers"
        url="https://caspertheghost.me/utils/percentage-calculator"
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <form onSubmit={onSubmit}>
        <div className={contactStyles.formGroup}>
          <label>Smallest amount</label>
          <input
            type="number"
            onChange={(e) => setSmallAmount(e.target.value as NumberString)}
            className={contactStyles.formInput}
            value={smallestAmount}
            style={{ fontFamily: "CascadiaMono" }}
          />
        </div>
        <div className={contactStyles.formGroup}>
          <label>Highest amount</label>
          <input
            type="number"
            onChange={(e) => setHighestAmount(e.target.value as NumberString)}
            className={contactStyles.formInput}
            value={highestAmount}
            style={{ fontFamily: "CascadiaMono" }}
          />
        </div>
        <div>
          <button disabled={isDisabled} className="btn btn__light" type="submit">
            Calculate
          </button>
          <button
            style={{ marginLeft: "0.5rem" }}
            type="button"
            onClick={resetForm}
            className="btn btn__light"
          >
            Clear
          </button>
        </div>
      </form>

      {result ? (
        <div>
          <h2>Your result is: {result}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default PercentageCalculator;
