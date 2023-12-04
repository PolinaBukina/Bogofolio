export const withBorder = (Component: () => JSX.Element) => {
    return () => {
        return (
            <div style={{ border: '3px solid red' }}>
                <Component />
            </div>
        )
    }
}