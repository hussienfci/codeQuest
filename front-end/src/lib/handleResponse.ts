export const handleResponse = async (res: Response , {rejectWithValue }: any) : Promise<any> => {
    try {
    if (!res.ok) {
        console.log(res);
        
        const error = await res.json()
        console.log(res);
        
        return rejectWithValue(res)
        // throw new Error(error.message || 'Request failed')
    }

        return await res.json()
    } catch(error) {
        return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
    }
}