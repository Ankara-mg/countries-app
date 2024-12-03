const ErrorMessage = ({ error }) => {
    return (
        <>
            {
                error &&
                <div className="alert alert-danger" role="alert">
                    {error.name} - {error.message}
                </div>
            }
        </>
    );
}

export default ErrorMessage;
