import Link from "next/link";

const NotFound = () => {
return <div>
    <h2>Not Found</h2>
    <p>Halaman Tidak tersedia</p>
    <Link href="/">Back to Home</Link>
</div>;
};
export default NotFound;