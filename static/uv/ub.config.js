self.__uv$config = {
    prefix: '/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/ub.handler.js',
    bundle: '/static/uv/ub.bundle.js',
    config: '/static/uv/ub.config.js',
    sw: '/static/uv/ub.sw.js',
};
