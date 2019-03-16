# 第一步：发布到master分支
set -e

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:tanggd/node-note.git master


# 第二步：发布到gh-pages分支
set -e
cd _book

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:tanggd/node-note.git master:gh-pages

cd -