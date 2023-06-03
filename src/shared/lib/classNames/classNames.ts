export type Mods = Record<string, boolean | string | undefined>

export function classNames(mainClass: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        mainClass,
        ...Object.entries(mods)
            .filter(([, isTrue]) => Boolean(isTrue))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ].join(' ');
}
