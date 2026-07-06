import { adminMetrics, adminQueue, icons, webViews } from "../data";

const { LayoutDashboard } = icons;

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
            <h2>Web performance and publishing queue.</h2>
          </div>
          <span className="admin-mode">
            <LayoutDashboard size={18} />
            Static preview
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
                <span>Owner</span>
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
                  <span>{view.owner}</span>
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
      </section>
    </main>
  );
}
