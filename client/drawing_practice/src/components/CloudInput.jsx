export default function CloudInput () {
    // Read current app mode
    const appMode = import.meta.env.VITE_APP_MODE;

    return(
        <div>
            {appMode === "demo" && (
                <p>At the moment only for personal use ;-)</p>
            )}

            {appMode === "personal" && (
                <p>Loading Google Drive files...</p>
            )}
        </div>
    );
}