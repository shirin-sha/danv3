"use client";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";
import Image from "next/image";
import { clients } from "@/data/clients";

export default function ClientsPage() {
  const categories = [
    { key: "government", title: "Clients (Kuwait Govt. & Gov-Owned Org)" },
    { key: "international", title: "International Companies" },
    { key: "pmc", title: "PMC" }
  ];

  const categorizedClients = clients.reduce(
    (acc, client) => {
      const location = (client.location || "").toLowerCase();

      if (location === "kuwait") {
        acc.government.push(client);
      } else if (location === "pmc") {
        acc.pmc.push(client);
      } else {
        acc.international.push(client);
      }
      return acc;
    },
    { government: [], international: [], pmc: [] }
  );

  return (
    <>
      <Header2 />
      <div
        id="top"
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle.jpg")' }}
      >
        <div className="shape-image float-bob-y"></div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">Our Clients</h1>
              </div>
              <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>Clients</li>
              </ul>
            </div>
            <div className="breadcrumb-image"></div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <ul className="nav justify-content-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <li key={cat.key} className="nav-item">
                  <a className="btn btn-outline-primary rounded-pill px-3" href={`#${cat.key}`}>
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {categories.map((cat, index) => {
            const items = categorizedClients[cat.key];
            return (
              <div key={cat.key} id={cat.key} className={index > 0 ? "pt-4 pt-md-5" : ""}>
                <div className="row align-items-end mb-3 mb-md-4">
                  <div className="col-12 col-md-8">
                    <h3 className="mb-0">{cat.title}</h3>
                    <p className="text-muted mb-0">{items.length} {items.length === 1 ? "client" : "clients"}</p>
                  </div>
                
                </div>

                <div className="row g-3 g-md-4">
                  {items.length === 0 && (
                    <div className="col-12">
                      <div className="border rounded-3 p-4 p-md-5 text-center bg-light">
                        <p className="mb-0">No clients added for this category yet.</p>
                      </div>
                    </div>
                  )}

                  {items.map((client) => (
                    <div key={client.id} className="col-6 col-sm-6 col-md-4 col-lg-3">
                      <div className="card h-100 border-0 shadow-sm text-center p-3 p-md-4 rounded-4 d-flex flex-column justify-content-between">
                        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: 180 }}>
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={260}
                            height={140}
                            className="mx-auto d-block"
                            style={{ objectFit: "contain", maxWidth: 220, width: "100%", height: "auto", maxHeight: 120 }}
                          />
                        </div>
                        <h6 className="mt-3 mb-0 text-center" style={{ lineHeight: 1.4 }}>{client.name}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer1 />
    </>
  );
} 