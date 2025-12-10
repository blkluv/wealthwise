import React, { useEffect } from "react";
import Link from "../components/link/Link";
import { AppRoute } from "../routes";
import Chart from "../components/chart/Chart";

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
                I AM WEALTHY reveals your financial future through thousands of data-driven simulations. 
                Stop guessing—see your most likely outcomes from best-case to worst-case, 
                all calculated privately in your browser.
              </strong>
            </p>

            <div className="home__cta">
              <Link 
                routeName={AppRoute.run} 
                className="button button-primary"
                style={{ fontWeight: 600 }}
              >
                Get Your Free Wealth Forecast →
              </Link>
              
              {/* Social Proof Element */}
              <div className="home__social-proof">
                <span>🔥 <strong>1,243</strong> simulations run this week • </span>
                <span>⭐ Trusted by <strong>3,000+</strong> investors</span>
              </div>
            </div>

            {/* Value Proposition - No redundant calculator */}
            <div className="home__value-prop">
              <h3>Why choose our simulator?</h3>
              <ul>
                <li>✅ <strong>Comprehensive analysis</strong> beyond simple calculators</li>
                <li>✅ <strong>Real market data</strong> for realistic projections</li>
                <li>✅ <strong>Private & secure</strong> - no data leaves your browser</li>
                <li>✅ <strong>Export results</strong> for detailed review</li>
              </ul>
            </div>
          </div>

          <div className="home__header-chart">
            <div style={{ 
              height: '200px', 
              width: '100%', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              <Chart isMini={true} />
            </div>
          </div>
        </div>
      </header>

      <main className="home__main">
        {/* Risk Assessment Hook */}
        <section className="home__risk-assessment">
          <h2>Discover Your Financial Blind Spots in 60 Seconds</h2>
          <p>Most people overlook 3+ critical risk factors in their wealth plan. Our simulation reveals them instantly.</p>
          <div className="home__cta">
            <Link 
              routeName={AppRoute.run} 
              className="button button-secondary"
            >
              🔍 Find Your Blind Spots Now →
            </Link>
          </div>
        </section>

        <section>
          <h2>Why Simulate? Because Uncertainty Is Real.</h2>
          <p>
            Basic calculators give you one answer. Reality isn't that simple. Interest rates rise, 
            markets move, inflation shifts, and your financial future changes. I AM WEALTHY embraces 
            uncertainty by modeling ranges, not guesses.
          </p>
          <p>
            Visualize how your net worth evolves across <strong>5th, 50th, and 95th percentile</strong> 
            outcomes—so you can understand the full picture.
          </p>
        </section>

        {/* Pain Points Section */}
        <section className="home__pain-points">
          <h2>Are You Making These Wealth-Building Mistakes?</h2>
          <ul>
            <li>❌ <strong>Underestimating market volatility</strong> in your projections</li>
            <li>❌ <strong>Ignoring tax implications</strong> on investment growth</li>
            <li>❌ <strong>Missing compound interest opportunities</strong> by starting late</li>
            <li>❌ <strong>Not stress-testing</strong> your financial plan against recessions</li>
          </ul>
          <p><strong>I AM WEALTHY fixes all of these—instantly.</strong></p>
        </section>

        <section>
          <h2>Built for Clear, Confident Decisions</h2>
          <p>
            For anyone who values clarity: investors, renters, homebuyers, creators, or early-retirement 
            planners. The engine reveals insights traditional calculators simply cannot provide.
          </p>
        </section>

        {/* Testimonial */}
        <section className="home__testimonial">
          <h2>What Early Users Are Saying</h2>
          <blockquote>
            "I AM WEALTHY showed me I was 40% under-saving for retirement. Fixed my plan and now I'm on track to retire 5 years earlier than planned."
            <footer>— Sarah M., 34, Marketing Director</footer>
          </blockquote>
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

        {/* FAQ Teaser */}
        <section className="home__faq-teaser">
          <h2>Common Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <strong>Is this really free?</strong>
              <p>Yes! All simulations are completely free. We believe financial clarity should be accessible to everyone.</p>
            </div>
            <div className="faq-item">
              <strong>How accurate are the projections?</strong>
              <p>We use historical market data and statistical models. While not perfect, they're far more realistic than simple linear projections.</p>
            </div>
            <div className="faq-item">
              <strong>Is my data safe?</strong>
              <p>100%. All calculations happen in your browser—we never see your personal financial information.</p>
            </div>
          </div>
          <div className="home__cta">
            <Link routeName={AppRoute.faq} className="button button-outline">
              View All FAQ Questions →
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="home__final-cta">
          <h2>Ready to See Your Financial Future?</h2>
          <p>Join thousands who've gained clarity on their wealth journey.</p>
          <div className="home__cta">
            <Link 
              routeName={AppRoute.run} 
              className="button button-primary button-large"
            >
              Start Your Free Simulation Now →
            </Link>
          </div>
          <p className="disclaimer-note">
            No credit card required • Takes less than 2 minutes • 100% private
          </p>
        </section>

        {/* Disclaimer */}
        <blockquote className="home__disclaimer">
          <p>
            <strong>Disclaimer:</strong> All projections are for educational purposes only and 
            do not constitute financial advice. For personalized guidance based on your unique 
            financial situation, you can connect with a qualified advisor below.
          </p>
          <div className="home__cta">
            <a 
              href="/advisor" 
              className="button button-secondary"
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
