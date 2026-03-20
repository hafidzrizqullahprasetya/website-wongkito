import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <Head>
            <title>
                {headTitle ? `${headTitle} | Pempek Asli Wong Kito` : "Pempek Asli Wong Kito - Pempek Palembang Terbaik"}
            </title>
        </Head>
    )
}

export default PageHead