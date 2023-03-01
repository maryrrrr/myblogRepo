import Layout from "../home/components/Layout";
import PostCard from "../home/components/PostCard";
const Category = () => {
    return(
        <Layout>
            <div className="text-center font-bold text-2xl">Category Title</div>
        <PostCard />
        <PostCard />
        <PostCard />
    </Layout>
    )

}
export default Category;