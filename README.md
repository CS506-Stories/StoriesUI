# Stories

## Setup 

Prerequisites
- Have npm installed (and node js)
- Have the Expo app installed on your phone, or a emulator installed on your computer

To Run 
```
git clone (this repository)
npm install 
npm run start
```

## Best Practices 
Use this command before pushing any commits.
```
npm run lint
```
This will ensure you are following the best styling practices. It is advised to hook up eslint with whatever IDE you are using (on VS Code its easy)
**Note**: npm will throw errors when there are eslint errors. This is because eslint returns a non-zero exit code because it found errors in your code. This is not a problem with npm. 
