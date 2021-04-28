import Head from 'next/head'

export default function Home() {
  const categories = [
    `Women's Running Shoes`,
    `Everyday Sneakers`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repellent Shoes`,
  ]

  const products = [
    {
      name: "Women's Wool Runner Mizzles",
      description: 'Our weather-ready sneaker made with merino wool and Puddle Guard™.',
      styles: [
        {
          name: 'Natural Gray (Cream Sole)',
          price: '$115',
          colors: ['#585c60', '#e2e2da'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Savanna Night (Cream Sole)',
          price: '$115',
          colors: ['#353946', '#e2e2da'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Black Sands (Asphalt Sole)',
          price: '$115',
          colors: ['#28282c', '#434345'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Cardamom (Cream Sole)',
          price: '$115',
          colors: ['#9d957a', '#e2e2da'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Ginseng (Beige Sole)',
          price: '$115',
          colors: ['#e7e5e2', '#bfbab5'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Dapple Gray (Beige Sole)',
          price: '$115',
          colors: ['#e7e5e2', '#bfbab5'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Aurora (Cream)',
          price: '$115',
          colors: ['#e7e5e2', '#bfbab5'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'Pacific (Cream Sole)',
          price: '$115',
          colors: ['#e7e5e2', '#bfbab5'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        },
        {
          name: 'True Black (Black Sole)',
          price: '$115',
          colors: ['#e7e5e2', '#bfbab5'],
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_420,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/WR3WNCW_SHOE_ANGLE_GLOBAL_WOMENS_WOOL_RUNNER_GREY_LIGHT_GREY_bca9b775-cdd3-4bf2-afef-97935ea55cf8.png%3Fv=1610049516'
        }
      ]
    }
  ]

  return (
    <div className="font-poppins">
      <Head>
        <title>Rebuilding Allbirds</title>
      </Head>
      <div className="px-4 py-1 bg-lime-800 text-white">
        <p className="text-xs font-medium text-center">
          We're raising prices on all products by $1 today in support of the planet.{` `}<a href="#" className="underline">Learn More</a>.
        </p>
      </div>
      <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img className="h-9" src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt="Allbirds" />
        </div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <div>
          <div className="flex items-center justify-between px-8 pt-4 pb-3">
            <div>
              <div className="text-xs font-medium text-gray-900 space-x-1">
                <a href="#" className="underline">Home</a>
                <span>/</span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                Women's Shoes
              </div>
            </div>
            <div>
              <button className="block h-6 w-6">
                <svg className="z-0 transform rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-3 overflow-x-auto scrollbars-hidden">
            <div className="px-8 text-sm inline-flex space-x-5">
              {categories.map((category, i) => (
                <a key={i} href="#" className="text-gray-800 whitespace-nowrap">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex items-center space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-14 w-14 transform rotate-12 -ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="flex space-x-2">
                <h2 className="text-sm font-medium text-gray-900">Pay It To The Planet</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-1 text-sm font-light text-gray-900 text-opacity-90">
                Every Black Friday purchase supports Friday For Future
              </p>
            </div>
          </div>
          <div className="py-12 px-8">
            {products.map((product, i) => (
              <div key={i}>
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-800">{product.description}</p>
                </div>
                <div className="mt-4 shadow-xl">
                  <div className="shadow-lg">
                    <a href="#">
                      <div>
                        <img src={product.styles[0].image} />
                      </div>
                      <div className="px-4 pt-3">
                        <h3 className="text-sm font-semibold">{product.name}</h3>
                        <p className="mt-1 text-sm text-gray-800">{product.styles[0].name}</p>
                      </div>
                    </a>
                    <div className="mt-1 px-4 pb-4">
                      <p className="text-sm text-gray-800">{product.styles[0].price}</p>
                      <div className="mt-4 flex space-x-4">
                        {product.styles.slice(0, 6).map((style, j) => (
                          <button key={j} className={`h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden transform -rotate-45 ${j === 0 ? 'ring-2 ring-offset-1 ring-gray-300' : ''}`}>
                            <span className="sr-only">{style.name}</span>
                            <span className="h-3 w-6" style={{ backgroundColor: style.colors[0] }}></span>
                            <span className="h-3 w-6" style={{ backgroundColor: style.colors[1] }}></span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t">
                      <button className="px-4 py-2 text-sm w-full flex justify-between">
                        <span className="font-semibold">Quick Add</span>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
