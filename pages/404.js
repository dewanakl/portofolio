import { useRouter } from 'react/router';

const Custome404 = () => {
    const number = 0;
    const router = useRouter();

    useEffect(() => {
        number = setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Anda Tersesat Masehzz</h1>
            <p>kembali pada {number}s</p>
        </div>
    );
}

export default Custome404;
