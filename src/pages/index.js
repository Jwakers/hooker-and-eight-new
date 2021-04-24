import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ColorSection from "../components/ColorSection"
import Box from "../components/Box"
import AnimateOnScroll from "../components/AnimateOnScroll"
import ReviewSection from "../components/ReviewSection"
import AboutSection from "../components/AboutSection"
import MapSection from "../components/MapSection"
import "../styles/_grid.scss"

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ColorSection>
                <section className="section">
                    <AnimateOnScroll>
                        <div className="grid">
                            <div className="grid__12 grid__md-10">
                                <Box>
                                    <div className="grid grid--gap">
                                        <div className="grid__12 grid__md-6">
                                            <h2>All fresh, all handmade</h2>
                                            <p>
                                                From our slow-cooked sauce, to
                                                our home made meatballs using
                                                Nonna Balzano's secret recipe.
                                                Hooker &amp; Eight takes serious
                                                pride in everything that goes
                                                onto our dough and are proud
                                                that the vast majority of our
                                                ingredients are sourced from
                                                local Gloucestershire
                                                businesses.
                                            </p>
                                        </div>
                                        <div className="grid__12 grid__md-6">
                                            <img
                                                src="https://res.cloudinary.com/drgquplia/image/upload/v1615569532/hooker-and-eight/gallery/pizza-ready-for-the-oven.jpg"
                                                alt="Pulling a pizza onto the pizza peel"
                                            />
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </section>
                <section className="section">
                    <AnimateOnScroll from="right">
                        <div className="grid">
                            <div className="grid__12 grid__md-10 grid--start-md-3">
                                <Box>
                                    <div className="grid grid--gap">
                                        <div className="grid__12 grid__md-6">
                                            <img
                                                src="https://res.cloudinary.com/drgquplia/image/upload/v1615569532/hooker-and-eight/gallery/vegetable-ingredients.jpg"
                                                alt="Assortment of pizza toppings"
                                            />
                                        </div>
                                        <div className="grid__12 grid__md-6">
                                            <h2>
                                                Vegetarian &amp; vegan options
                                            </h2>
                                            <p>
                                                We have some of the best vegan
                                                and vegetarian options you'll
                                                find in Gloucetershire! Almost
                                                all of our pizzas can be
                                                veganized. Using faux meats,
                                                vegan pestos and our freshly
                                                made almond ricotta. No matter
                                                what your taste, we've got you
                                                covered.
                                            </p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </section>
            </ColorSection>
            <ReviewSection />
            <AboutSection />
            <hr className="hr" />
            <MapSection />
        </Layout>
    )
}
