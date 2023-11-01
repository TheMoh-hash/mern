import {Helmet, HelmetProvider} from "react-helmet-async"

const MetaComponent = ({title="Best Online Shop", description="Get All The Best Shoes HERE!!"}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
        </HelmetProvider>
    )
}

export default MetaComponent