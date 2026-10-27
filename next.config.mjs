/** Serves the static site at "/" while API routes handle the forms. */
export default { async rewrites(){ return { beforeFiles:[{source:"/",destination:"/site.html"}] } } };
