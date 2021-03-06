import Layout from '../components/layouts/Layout';
import ProductDetails from '../components/layouts/ProductDetails';
import useProducts from '../hooks/useProducts';

const Home = () => {
    const {products} = useProducts('createdAt');

    return (
        <>
            <Layout>
                <div className="listado-productos">
                    <div className="contenedor">
                        <ul className="bg-white">
                            {products.map(product => <ProductDetails key={product.id} product={product} />)}
                        </ul>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Home;