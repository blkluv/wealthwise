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

            {/* Value Proposition - Emoji only */}
            <div className="home__value-prop">
              <div className="value-prop-emojis">
                <div className="emoji-item">✅ Comprehensive analysis</div>
                <div className="emoji-item">📊 Real market data</div>
                <div className="emoji-item">🔒 Private & secure</div>
                <div className="emoji-item">📥 Export results</div>
              </div>
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

        {/* Pain Points Section - Emoji only */}
        <section className="home__pain-points">
          <h2>Are You Making These Wealth-Building Mistakes?</h2>
          <div className="pain-points-emojis">
            <div className="emoji-item">❌ Underestimating market volatility</div>
            <div className="emoji-item">❌ Ignoring tax implications</div>
            <div className="emoji-item">❌ Missing compound interest opportunities</div>
            <div className="emoji-item">❌ Not stress-testing against recessions</div>
          </div>
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

        {/* Key Features - Emoji only */}
        <section>
          <h2>Key Features</h2>
          <div className="features-emojis">
            <div className="emoji-item">🎲 Monte Carlo Engine</div>
            <div className="emoji-item">📈 Percentile Forecasts</div>
            <div className="emoji-item">📊 Distribution Insights</div>
            <div className="emoji-item">🏠 Detailed Modeling</div>
            <div className="emoji-item">📱 Interactive Visuals</div>
            <div className="emoji-item">📥 Export Data</div>
            <div className="emoji-item">🔒 Private by Design</div>
            <div className="emoji-item">🔓 Open Source</div>
          </div>
        </section>

        {/* How It Works - Emoji only */}
        <section>
          <h2>How It Works</h2>
          <div className="how-it-works-emojis">
            <div className="emoji-item">1️⃣ Enter Your Scenario</div>
            <div className="emoji-item">2️⃣ Define Uncertainty</div>
            <div className="emoji-item">3️⃣ Run the Simulation</div>
            <div className="emoji-item">4️⃣ Review Your Forecast</div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="home__faq-teaser">
          <h2>Common Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <strong>💰 Is this really free?</strong>
              <p>Yes! All simulations are completely free.</p>
            </div>
            <div className="faq-item">
              <strong>🎯 How accurate are the projections?</strong>
              <p>We use historical market data and statistical models.</p>
            </div>
            <div className="faq-item">
              <strong>🔒 Is my data safe?</strong>
              <p>100%. All calculations happen in your browser.</p>
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
              🚀 Start Your Free Simulation Now →
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
              💼 Speak with a Financial Advisor →
            </a>
          </div>
        </blockquote>
      </main>
    </div>
  );
};

export default Home;
