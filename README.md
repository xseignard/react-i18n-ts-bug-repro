# react-i18n-ts-bug-repro

See comment: https://github.com/i18next/react-i18next/issues/1394#issuecomment-976853798


Run the following:

```
npm i
npm run types
```

Should output something like this:

```
Version 4.5.2
src/App.tsx:8:7 - error TS2589: Type instantiation is excessively deep and possibly infinite.

 8       <Trans i18nKey="ns1:name" t={t}>
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 9         <h1>Weird</h1>
   ~~~~~~~~~~~~~~~~~~~~~~
10       </Trans>
```