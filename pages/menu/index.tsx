import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import prisma from '../../lib/prisma'
import ProductItem from '../../components/productItem'
import { Product } from '@prisma/client'

const Menu: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({products}) => {

    return (
    <main>
        <header>
            <h1>Menu</h1>
        </header>
        <section>
            <h2>Meals</h2>
            <div className="cards_container">
                {products.meals.map((x: Product , y: number) => <ProductItem id={x.id} preview={true} key={y} image={`/img/products/${x.image}`} intro={x.description} price={x.price} title={x.title}/>)}
            </div>
        </section>
        <section>
            <h2>Snacks</h2>
            <div className="cards_container">
                {products.snacks.map((x: Product , y: number) => <ProductItem id={x.id} preview={true} key={y} image={`/img/products/${x.image}`} intro={x.description} price={x.price} title={x.title}/>)}
            </div>
        </section>
        <section>
            <h2>Drinks</h2>
            <div className="cards_container">
                {products.drinks.map((x: Product , y: number) => <ProductItem id={x.id} preview={true} key={y} image={`/img/products/${x.image}`} intro={x.description} price={x.price} title={x.title}/>)}
            </div>
        </section>
    </main>
  )
}

export default Menu

export const getServerSideProps: GetServerSideProps = async () => {
    
    const data = await prisma.product.findMany();
    return {
        props: {
            products: {
                drinks: data.filter((x: Product) => x.productCategoryId === 4),
                meals: data.filter((x: Product) => x.productCategoryId === 5),
                snacks: data.filter((x: Product) => x.productCategoryId === 6),
            }
        }
    }
}