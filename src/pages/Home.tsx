import React, { useEffect } from "react";
import Link from "../components/link/Link";
import { AppRoute } from "../routes";
import Chart from "../components/chart/Chart";
import "./page.less"; // This should now work without the external import

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "IAMWEALTHY";
  }, []);

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-content">
          <div className="home__header-text">
            <h1>See Your Future Wealth—Instantly.</h1>
            <p>
              <strong>
                Stop guessing. Run thousands of data-driven simulations to reveal your 
                future wealth under different market conditions. See your most likely 
                outcomes—from best-case to worst-case—all calculated privately in your browser.
              </strong>
            </p>
            <div className="home__cta">
              <Link 
                routeName={AppRoute.run} 
                className="button button-primary"
                style={{ fontWeight: 700 }}
              >
                Get Your Free Wealth Forecast →
              </Link>
            </div>
          </div>

          <div className="home__header-chart">
            <div style={{ height: '200px', width: '100%' }}>
              <Chart isMini={true} />
            </div>
          </div>
        </div>
      </header>

      <main className="home__main">
        <section>
          <h2>Why Simulate? Because Uncertainty Is Real.</h2>
          <p>
            Basic calculators give you one answer. Reality isn't that simple. Interest rates rise, 
            markets move, inflation shifts, and your financial future changes. Wealthwise embraces 
            uncertainty by modeling ranges, not guesses.
          </p>
          <p>
            Visualize how your net worth evolves across <strong>5th, 50th, and 95th percentile</strong> 
            outcomes—so you can understand the full picture.
          </p>
        </section>

        <section>
          <h2>Built for Clear, Confident Decisions</h2>
          <p>
            For anyone who values clarity: investors, renters, homebuyers, creators, or early-retirement 
            planners. The engine reveals insights traditional calculators simply cannot provide.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Monte Carlo Engine:</strong> Runs hundreds of simulations for every scenario.</li>
            <li><strong>Percentile Forecasts:</strong> Compare realistic best-case, median, and worst-case results.</li>
            <li><strong>Distribution Insights:</strong> Understand the probability of different outcomes.</li>
            <li><strong>Detailed Modeling:</strong> Mortgage dynamics, inflation, taxes, investments, and more.</li>
            <li><strong>Interactive Visuals:</strong> Explore year-by-year wealth projections.</li>
            <li><strong>Export Data:</strong> Download detailed spreadsheets for deeper analysis.</li>
            <li><strong>Private by Design:</strong> All calculations happen locally in your browser.</li>
            <li><strong>Open Source:</strong> Full transparency. View the code on GitHub.</li>
          </ul>
        </section>

        <section>
          <h2>How It Works</h2>
          <ol>
            <li><strong>Enter Your Scenario:</strong> Input property, rent, terms, and assumptions.</li>
            <li><strong>Define Uncertainty:</strong> Use ranges where outcomes vary (e.g., "3%–5%").</li>
            <li><strong>Run the Simulation:</strong> Let the engine compute hundreds of potential paths.</li>
            <li><strong>Review Your Forecast:</strong> Explore charts, distributions, and download the summary.</li>
          </ol>
        </section>

        <blockquote style={{ marginTop: "40px" }}>
          <p>
            <strong>Disclaimer:</strong> All projections are for educational purposes only and 
            do not constitute financial advice. For personalized guidance based on your unique 
            financial situation, you can connect with a qualified advisor below.
          </p>
          <div className="home__cta" style={{ marginTop: "15px" }}>
            <a 
              href="/advisor" 
              className="button button-secondary"
              style={{
                fontWeight: 600,
                padding: "10px 18px",
                display: "inline-block",
                borderRadius: "6px",
              }}
            >
              Speak with a Financial Advisor →
            </a>
          </div>
        </blockquote>
      </main>
    </div>
  );
};

export default Home;
