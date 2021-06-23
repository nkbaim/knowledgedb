rm -rf docs/.vuepress/dist/
npm run build
scp -r docs/.vuepress/dist/* duyang@duomics.cn:/www/server/tomcat/webapps/pkdb/