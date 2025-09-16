export const handleResponse = async (res: Response): Promise<any> => {
    if (!res.ok) {
        console.log(res);
        
        const error = await res.json()
        throw new Error(error.message || 'Request failed')
    }
    try {
        return await res.json()
    } catch {
        return
    }
}