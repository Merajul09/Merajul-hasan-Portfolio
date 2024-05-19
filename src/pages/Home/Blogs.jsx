import SectionTitle from "../../components/Shared/SectionTitle";

const Blogs = () => {
    return (
        <div id="post" className="py-8">
            <div>
                <SectionTitle title='Blog'></SectionTitle>
            </div>
            <div className="grid md:grid-cols-3 gap-5 mb-14">
                {/* blog coming soon */}
                <p className="text-white">coming soon...</p>
            </div>
        </div>
    );
};

export default Blogs;