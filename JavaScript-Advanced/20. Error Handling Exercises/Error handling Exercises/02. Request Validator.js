function validateRequest(obj) {
    let method = obj.method;
    let uri = obj.uri;
    let version = obj.version;
    let message = obj.message;

    let allMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let allVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!allMethods.includes(method))
        throw new Error("Invalid request header: Invalid Method");

    if (uri === undefined || !uri.match(/(\*|^[a-zA-Z0-9\.]+$)/))
        throw new Error("Invalid request header: Invalid URI");

    if (version === undefined || !allVersions.includes(version))
        throw new Error("Invalid request header: Invalid Version");

    if (message === undefined || !message.match(/(^[^>\\&'"<]*$)/))
        throw new Error("Invalid request header: Invalid Message");

    return obj;
}