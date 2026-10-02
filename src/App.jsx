import './App.css'

const featuredItems = [
  { name: 'Butter Croissant', price: '$3.50', detail: 'Flaky layers baked fresh every morning.' },
  { name: 'Chocolate Cake Slice', price: '$5.00', detail: 'Rich cocoa sponge with silky ganache.' },
  { name: 'Cinnamon Roll', price: '$4.00', detail: 'Soft brioche swirled with brown sugar cinnamon.' },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Fresh Daily • Local Bakery</p>
        <h1>Sweet Crumb Bakery</h1>
        <p className="intro">
          Handcrafted breads, pastries, and cakes made with simple ingredients and a lot of love.
        </p>
        <a className="cta" href="#visit">Visit Us Today</a>
      </header>

      <section className="menu" aria-labelledby="menu-title">
        <h2 id="menu-title">Featured Treats</h2>
        <div className="menu-grid">
          {featuredItems.map((item) => (
            <article key={item.name} className="menu-card">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <span>{item.price}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="visit" aria-labelledby="visit-title">
        <h2 id="visit-title">Plan Your Visit</h2>
        <p>123 Main Street, Springfield</p>
        <p>Mon-Sat: 7:00 AM - 6:00 PM</p>
        <p>Call us: (555) 010-2244</p>
      </section>
    </main>
  )
}

export default App
