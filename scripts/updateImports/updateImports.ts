import { Project } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: './tsconfig.json',
});

const files = project.getSourceFiles();

const isNeedChange = (value: string) => {
    const layers = ['shared', 'entities.entities', 'features', 'pages', 'widgets', 'app'];
    return layers.some((layer) => value.startsWith(layer));
};

files.forEach((sourceFile) => {
    sourceFile.getImportStringLiterals()
        .forEach((importStringLiteral) => {
            const literalValue = importStringLiteral.getLiteralValue();

            if (literalValue.includes('entities.entities')) {
                const literalValueWithoutEntities = literalValue.split('entities.entities');
                importStringLiteral
                    .setLiteralValue(
                        `${literalValueWithoutEntities[0]}entities${literalValueWithoutEntities[1]}`,
                    );
            }
        });
});
project.save();
