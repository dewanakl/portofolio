import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custome404 = () => {
    let number = 3;
    const router = useRouter();

    useEffect(() => {
        let time = setTimeout(() => {
            if (number == 0) {
                router.push('/');
                clearTimeout(time);
            }
            number--;
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Anda Tersesat Masehzz</h1>
            <p>kembali pada {number}s</p>
        </div>
    );
}

export default Custome404;
