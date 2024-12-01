import React from 'react';

const Section = ({ title, children }) => {
    return (
        <section style={styles.section}>
            <h2 style={styles.title}>{title}</h2>
            <div>{children}</div>
        </section>
    );
};

const styles = {
    section: { padding: '2rem', textAlign: 'center' },
    title: { fontSize: '2rem', marginBottom: '1rem' },
};

export default Section;
