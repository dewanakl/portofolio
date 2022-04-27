import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Custome404 = () => {
    const router = useRouter();

    const [number, setNumber] = useState(3);

    useEffect(() => {
        let time = setInterval(() => {
            if (number == 0) {
                router.push('/');
                clearInterval(time);
            }
            setNumber(number - 1);
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
