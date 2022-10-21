function Portfolio (props){
    return (
        <section className={`section-contact section-applies ${props.page === 4 ? "active" : null}`}>
            <img width={'800px'} src='https://bakuidealab.az/wp-content/uploads/2019/11/dessigner.gif' alt='hls'/>
        </section>
    );
}

export {Portfolio};