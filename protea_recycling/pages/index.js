import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <div id="header">
        <div className="container">
          <nav>
            <Image src="/images/protea_recycling_1.png" alt="Protea Recycling Logo" width={100} height={50} className="logo" />
            <ul className="head-list">
              <li><a href="#">Home</a></li>
              <li><a href="#calc">Earn</a></li>
              <li><a href="#Attention">How it works</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </nav>
  
          <div>
            <h3><strong>Meet Protea</strong></h3>
            <h1>Make the most out of <br />Protea&apos;s Pfand system</h1>
            <h3><strong>Earn with the Protea recycling system that pays you for saving the world</strong></h3>
            <a id="earn-button" href="#ea">Start earning</a>
          </div>
        </div>
      </div>

      <div id="CO2">
        <iframe 
          title="Tons of CO2 emitted into the atmosphere"
          src="https://www.theworldcounts.com/embeds/counters/23?e&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
          style={{border: 'none'}}
          height={100}
          width={400}
        />
      </div>

      <div id="Attention">
        <div className="container">
          <h1 className="sub-title">Make a difference with Protea</h1>
          <div className="attention-list">
            <div className="box">
              <i className="fas fa-recycle"></i>
              <h2>Want to make money with protea recycling?</h2>
              <p className="att-words">
                Let&apos;s start off with what Protea Recycling is and what we stand for.
                <br />We are a company dedicated to cleaning South Africa and the world one can at a time,
                but not just that! We also want to empower many South Africans and help them make a few pennies on the side.
                <br />Let&apos;s discuss how we make you money. <br /> We require you to scan the items you wish to recycle, 
                we give you an estimate on how much money you can expect to receive and from there you make the decision whether to call for a collection or drop off the material at the nearest location. 
              </p>
              <a href="#">Learn more</a>
            </div>

            <div className="box">
              <i className="fas fa-recycle"></i>
              <h2>Change the world<div id="change-world"></div></h2>
              <p className="att-words">
                <u>Reducing waste in landfills</u><br />
                Recycling reduces the amount of waste sent to landfills and incinerators. This helps decrease the release of harmful chemicals and greenhouse gases from these sites, reducing pollution and its impact on the environment.
                <br />
                <u>Conserving natural resources</u><br />
                Recycling helps conserve natural resources such as timber, water, and minerals.
                <br />
                <u>Saving energy</u><br />
                Manufacturing products from recycled materials typically requires less energy compared to producing them from new raw materials. 
                <u>Reducing greenhouse gas emissions</u><br />
                Recycling helps reduce greenhouse gas emissions that contribute to climate change. 
                <br />
                <u>Promoting sustainable Use of Materials</u><br />
                Recycling encourages the sustainable use of materials, fostering a circular economy where products are reused, remanufactured, and recycled continuously. 
                <br />
                <u>Protecting wildlife</u><br />
                By reducing the need to extract new raw materials, recycling helps preserve natural habitats and protects wildlife.
                <br />
                <u>Reducing pollution</u><br />
                Recycling decreases pollution by minimizing the need for waste disposal and reducing the extraction and processing of virgin materials.
                <br />
                <u>Economic benefits</u><br />
                Recycling can create jobs and generate economic benefits. The recycling industry supports millions of jobs worldwide in collection, processing, and selling recycled materials.
              </p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <div id="calc">
        <div className="container2">
          <h1 className="sub-title2">Earn with Protea</h1>
          <div className="container3">
            <div className="calc-list">
              <div className="box2">
                <h2>How much will you earn?</h2>
                <p className="calc-words">Add whatever you plan on recycling to the counter and get an estimate on what you could be earning</p>
                <div className="calculator">
                  {/* This is where the JavaScript calculator will go */}
                </div>
              </div>

              <div className="box2">
                <h2>How much of an impact are you making?</h2>
                <p>This counter tells you how much of an impact you are making</p>
                <div className="calc-info">
                  {/* This is where the info linked to the calculator will go */}
                </div>
              </div>

              <div className="box2">
                <h2>What are we going to do with your recycled material?</h2>
                <p>Edit this info and add some info about what Protea plans to use the recycling for, briefly</p>
                <div className="rec-info">
                  {/* A brief synopsis (make sure to make it clickable and make it take you to a part of the website that explains in more detail) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}