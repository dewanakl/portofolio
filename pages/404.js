import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Custome404 = () => {
    let number = 3;
    const router = useRouter();

    useEffect(() => {
        let time = setInterval(() => {
            if (number == 0) {
                router.push('/');
                clearInterval(time);
            }
            number = number - 1;
        }, 1000);
    }, []);

    return (
        <Layout pageTitle="tersesat">
            <h1>Anda Tersesat Masehzz</h1>
            <p>kembali pada {number}s</p>
        </Layout>
    );
}

export default Custome404;
