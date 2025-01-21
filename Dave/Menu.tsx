import DrinkListDescriptions from "./working/bar/DrinkListDescriptions";

export const Menu = () => {
    const drinkListDescriptions: DrinkListDescriptions =
        new DrinkListDescriptions();

    const drinkMap: Map<string, string> =
        drinkListDescriptions.getAllDescriptions();

    return (
        <>
            <section className="pizzabg pb-2 pt-2">
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="text-success satisfy-regular">
                                Menu
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="d-flex ">
                                <div>
                                    <h3 className="fs-3 text-success satisfy-regular pb-1">
                                        Pizzas
                                    </h3>
                                    <p className="fw-bold mb-0 text-danger">
                                        Margherita
                                    </p>
                                    <p>
                                        Packed with three cheeses: Mozzarella,
                                        Goat's Cheese, & Red Leicester.
                                    </p>
                                    <p className="fw-bold mb-0 text-danger">
                                        Hawaiian
                                    </p>
                                    <p>
                                        Classic flavour with prosciutto ham,
                                        succulant pineapple and topped with
                                        rocket.
                                    </p>
                                    <p className="fw-bold mb-0 text-danger">
                                        Pepperoni
                                    </p>
                                    <p>
                                        Speaks for itself. Just pepperoni and
                                        nothing else! Also with tomato sauce,
                                        cheese, and rocket. And garlic drizzle.
                                    </p>
                                    <p className="fw-bold mb-0 text-danger">
                                        Vegetarian - GF, V
                                    </p>
                                    <p>
                                        With peppers, sweetcorn, and red onion.
                                        Also available as gluten-free option
                                        because it's much cheaper for us to
                                        clump vegetarians and people with gluten
                                        intolerance into one group.
                                    </p>
                                    <p className="fw-bold mb-0 text-danger">
                                        Seafood
                                    </p>
                                    <p>
                                        Anchovies, prawns, sweetcorn, and extra
                                        anchovies. Topped with fresh basil.
                                    </p>
                                    <p className="fw-bold mb-0 text-danger">
                                        Special
                                    </p>
                                    <p>
                                        Pretty much the same as Seafood but with
                                        added mushrooms and a lot more
                                        expensive.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="d-flex">
                                <div>
                                    <h3 className="fs-3 text-success satisfy-regular">
                                        Cocktails
                                    </h3>
                                    {Array.from(drinkMap).map(
                                        ([key, value]) => (
                                            <div key={key}>
                                                <p className="fw-bold mb-0 text-danger">
                                                    {key}
                                                </p>
                                                <p>{value}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
