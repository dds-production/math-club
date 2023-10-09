function path(root, sublink) {
    return `${root}${sublink}`;
}

// Initial path for our app
const ROOT_DASHBOARD = '/';

const PATH_DASHBOARD = {
    root: ROOT_DASHBOARD,
    general: {
        app: path(ROOT_DASHBOARD, 'app'),
    },
};

export default PATH_DASHBOARD;
