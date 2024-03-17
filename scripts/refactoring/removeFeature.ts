import {
    CallExpression,
    JsxAttributeLike,
    JsxSelfClosingElement,
    Project,
    SyntaxKind,
} from 'ts-morph';

const [,, name, mode] = process.argv;

if (!name) {
    throw new Error('передайте имя фичи');
}

if (!mode) {
    throw new Error('Передайте мод фичи (on или off)');
}

if (mode !== 'off' && mode !== 'on') {
    throw new Error('Значение сотояния фичи должно быть on или off');
}

const replaceToggleFunction = (node: CallExpression) => {
    // console.log('@', node.getText());

    const objectOption = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
    if (!objectOption) return;

    const featureNameProp = objectOption.getProperty('featureName');
    const onProp = objectOption.getProperty('on');
    const offProp = objectOption.getProperty('off');
    console.log(featureNameProp?.getStructure());

    const featureName = featureNameProp
        ?.getDescendants()[2]
        ?.getText()
        ?.slice(1, -1);
    const on = onProp?.getDescendants()[2];
    const off = offProp?.getDescendants()[2];

    if (featureName !== name) return;

    if (mode === 'on') {
        node.replaceWithText(on?.getText() ?? '');
    }

    if (mode === 'off') {
        node.replaceWithText(off?.getText() ?? '');
    }
};

const getAttributeText = (attribute?: JsxAttributeLike) => {
    const attributeText = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (attributeText?.startsWith('(')) {
        return attributeText.slice(1, -1);
    }

    if (attributeText === 'null') {
        return '';
    }

    return attributeText;
};

const replaceToggleComponent = (node: JsxSelfClosingElement) => {
    console.log(node.getText());
    const featureName = node.getAttribute('featureName')
        ?.getDescendants()[2]
        ?.getText()
        ?.slice(1, -1);

    const on = getAttributeText(node.getAttribute('on'));

    const off = getAttributeText(node.getAttribute('off'));

    console.log(featureName, on, off);

    if (featureName !== name) return;

    if (mode === 'on') {
        node.replaceWithText(on ?? '');
    }

    if (mode === 'off') {
        node.replaceWithText(off ?? '');
    }
};

const project = new Project({
    tsConfigFilePath: './tsconfig.json',
});
const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && node.getText().startsWith('toggleFeature(')) {
            replaceToggleFunction(node);
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && node.getText().startsWith('<ToggleFeature')) {
            replaceToggleComponent(node);
        }
    });
});
project.save();
// node.forEachChild((child) => {
//     console.log(child.getText(), '\n\n\n');
//     if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
//         console.log('@', child.getText(), '\n\n\n');
//     }
// });
