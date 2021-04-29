import React from "react"
import MetaInfo from "../components/MetaInfo"
import OpensideForm from "../components/OpensideForm"

export default function About({ path }) {
    const eArr = ["open", "side", "pizza", "@gmail", ".com"]

    return (
        <div className="container">
            <MetaInfo
                title="Openside"
                description="Find out all about Openside, Hooker &amp; Eight's event service"
                path={path}
            />
            <h1>Openside</h1>
            <div className="grid grid--gap">
                <div className="grid__12 grid__md-6">
                    <p>
                        Dan &amp; Balz have teamed up with Gloucester captain,
                        stalwart and all round top boi Lewis Ludlow to take
                        Hooker &amp; Eight Pizzas on road!!
                    </p>
                    <p>
                        Ludz has been a Hooker &amp; Eight supporter from the
                        very beginning opening up the restaurant in October
                        2019. It wasn't long before he approached the boys about
                        taking the pizza out to the people. The opportunity was
                        like a cross-field kick had landed into our hands with
                        the try line beckoning. We grabbed at the chance and
                        Openside Pizza was born!!
                    </p>
                    <p>
                        Openside Pizza is a converted horse-box available for
                        any outdoor functions. Whether it be your wedding,
                        birthday, office or house party, our preemo pizzas
                        will be available for hire! You never know - Lewis might
                        be helping serve and slice and you can twist his ear
                        about the current state of Gloucester's fortunes. He
                        might even bring some friends along ;)
                    </p>
                </div>
                <div className="grid__12 grid__md-6">
                    <p>
                        The minimum order will be 50 pizzas and we will provide
                        a generous range of our famous Hooker &amp; Eight
                        toppings, sides and dips. We can cater to any taste or
                        dietary requirement (lactose and gluten free options) as
                        well as a fantastic range of vegetarian and vegan
                        options.
                    </p>
                    <p>
                        The Openside horse-box is solar powered and
                        self-sustained so no power link ups are required. The
                        horse-box is able to fit on regular sized driveway and
                        requires sensible access to sites.
                    </p>
                    <p>
                        Openside Pizza is fully insured and a full allergen list
                        is available upon request.
                    </p>
                    <p>
                        To enquire about having Openside Pizza at your event -
                        please fill out the short form below.
                        <br />
                        <strong>
                            Please note: This form is not a confirmation of
                            booking. Once we have received your details we will
                            be in contact to finalise your event.
                        </strong>
                    </p>
                </div>
            </div>

            <OpensideForm />
        </div>
    )
}
