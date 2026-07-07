import {
  adminMetrics,
  adminQueue,
  contentPerformance,
  icons,
  journeyPaths,
  sourceBreakdown,
  trafficTrend,
  webViews,
} from "../data";

const { Activity, LayoutDashboard, Sparkles } = icons;

export const metadata = {
  title: "Admin",
  description: "EffectX admin dashboard for web views, analytics and content.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main>
      <section className="page-hero admin-hero">
        <p className="eyebrow">Admin</p>
        <h1>Website command centre.</h1>
        <p>
          A focused operating view for analytics, content, conversion paths and
          the pages that need attention.
        </p>
      </section>

      <section className="section admin-shell">
        <div className="admin-toolbar">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Usage analysis, content performance and commercial next actions.</h2>
          </div>
          <span className="admin-mode">
            <LayoutDashboard size={18} />
            Protected admin
          </span>
        </div>

        <div className="metric-grid">
          {adminMetrics.map(({ label, value, delta, Icon }) => (
            <article className="metric-card" key={label}>
              <Icon size={24} />
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{delta}</p>
            </article>
          ))}
        </div>

        <div className="admin-layout">
          <section className="admin-panel web-views-panel">
            <div className="panel-heading">
              <h3>Managed web views</h3>
              <span>{webViews.length} views</span>
            </div>
            <div className="web-view-table">
              <div className="web-view-row header-row">
                <span>View</span>
                <span>Status</span>
                <span>Visitors</span>
                <span>Conversion</span>
                <span>Bounce</span>
                <span>Next action</span>
              </div>
              {webViews.map((view) => (
                <div className="web-view-row" key={view.path}>
                  <span>
                    <strong>{view.name}</strong>
                    <small>{view.path}</small>
                  </span>
                  <span>{view.status}</span>
                  <span>{view.visitors}</span>
                  <span>{view.conversion}</span>
                  <span>{view.bounce}</span>
                  <span>{view.nextAction}</span>
                </div>
              ))}
            </div>
          </section>

          <aside className="admin-panel queue-panel">
            <div className="panel-heading">
              <h3>Next actions</h3>
              <span>Queue</span>
            </div>
            <div className="queue-list">
              {adminQueue.map((item) => (
                <article key={item.title}>
                  <span>{item.type}</span>
                  <h4>{item.title}</h4>
                  <p>{item.status}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <div className="admin-analytics-grid">
          <section className="admin-panel">
            <div className="panel-heading">
              <h3>Traffic trend</h3>
              <span>30 days</span>
            </div>
            <div className="trend-list">
              {trafficTrend.map((item) => (
                <article key={item.period}>
                  <span>{item.period}</span>
                  <strong>{item.sessions}</strong>
                  <p>{item.leads} leads</p>
                  <em>{item.conversion}</em>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel">
            <div className="panel-heading">
              <h3>Sources</h3>
              <span>Quality</span>
            </div>
            <div className="compact-table">
              {sourceBreakdown.map((source) => (
                <div key={source.source}>
                  <strong>{source.source}</strong>
                  <span>{source.sessions}</span>
                  <span>{source.share}</span>
                  <em>{source.quality}</em>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="admin-layout deeper-admin-layout">
          <section className="admin-panel">
            <div className="panel-heading">
              <h3>User journeys</h3>
              <span>Entry to enquiry</span>
            </div>
            <div className="journey-list">
              {journeyPaths.map((journey) => (
                <article key={journey.path}>
                  <Activity size={20} />
                  <div>
                    <h4>{journey.path}</h4>
                    <p>{journey.note}</p>
                  </div>
                  <strong>{journey.users}</strong>
                  <span>{journey.conversion}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-panel">
            <div className="panel-heading">
              <h3>Content performance</h3>
              <span>Proof engine</span>
            </div>
            <div className="content-signal-list">
              {contentPerformance.map((item) => (
                <article key={item.title}>
                  <Sparkles size={18} />
                  <div>
                    <span>{item.type}</span>
                    <h4>{item.title}</h4>
                    <p>{item.signal}</p>
                  </div>
                  <strong>{item.views}</strong>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
