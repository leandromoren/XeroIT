module.exports = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: "/:path*",
                    destination: "/middleware.ts"
                }
            ]
        }
    }
}