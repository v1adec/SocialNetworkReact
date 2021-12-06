export const handleError = string => {
    const result = string.substring(
        string.lastIndexOf(">") + 1,
        string.lastIndexOf(")")
    );
    return result.charAt(0).toLowerCase() + result.slice(1);
}