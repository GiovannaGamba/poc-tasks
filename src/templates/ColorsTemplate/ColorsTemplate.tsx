import React from 'react';

interface ColorPaletteProps {
  title: string;
  colorName: string;
  shades: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colorName, shades }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
      {shades.map((shade) => {
        const bgClass = `bg-${colorName}-${shade}`;
        return (
          <div key={shade} className="text-center">
            <div 
              className={`w-16 h-16 rounded-lg border border-neutral-200 mb-2 mx-auto ${bgClass}`}
            ></div>
            <div className="text-xs font-mono text-neutral-700">
              {colorName}-{shade}
            </div>
            <div className="text-xs text-neutral-500">{bgClass}</div>
          </div>
        );
      })}
    </div>
  </div>
);

interface ColorsTemplateProps {
  title?: string;
  description?: string;
  showExamples?: boolean;
  showTextExamples?: boolean;
  showLimitedColors?: boolean;
  showFullPalettes?: boolean;
  customColorPalettes?: Array<{
    title: string;
    colorName: string;
    shades: string[];
  }>;
}

const ColorsTemplate: React.FC<ColorsTemplateProps> = ({
  title = "Paleta de Cores do Projeto",
  description = "Visualize todas as cores configuradas no Tailwind CSS",
  showExamples = true,
  showTextExamples = true,
  showLimitedColors = true,
  showFullPalettes = true,
  customColorPalettes = []
}) => {
  const defaultColorPalettes = [
    {
      title: 'Neutral Colors',
      colorName: 'neutral',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    {
      title: 'Primary Colors',
      colorName: 'primary',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    {
      title: 'Secondary Colors',
      colorName: 'secondary',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    {
      title: 'Success Colors',
      colorName: 'success',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    {
      title: 'Warning Colors',
      colorName: 'warning',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    {
      title: 'Danger Colors',
      colorName: 'danger',
      shades: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
  ];

  const defaultLimitedColors = [
    {
      title: 'Pink Colors',
      colorName: 'pink',
      shades: ['200', '500', '700', '900']
    },
    {
      title: 'Green Colors',
      colorName: 'green',
      shades: ['200', '500', '700', '900']
    },
    {
      title: 'Orange Colors',
      colorName: 'orange',
      shades: ['200', '500', '700', '900']
    },
    {
      title: 'Purple Colors',
      colorName: 'purple',
      shades: ['200', '500', '700', '900']
    }
  ];

  const colorPalettes = customColorPalettes.length > 0 ? customColorPalettes : defaultColorPalettes;
  const limitedColors = defaultLimitedColors;

  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-neutral-600">
            {description}
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Esta página usa apenas as classes Tailwind CSS configuradas
          </p>
        </div>

        {/* Paletas completas (50-900) */}
        {showFullPalettes && colorPalettes.map((palette) => (
          <ColorPalette
            key={palette.title}
            title={palette.title}
            colorName={palette.colorName}
            shades={palette.shades}
          />
        ))}

        {/* Paletas limitadas */}
        {showLimitedColors && limitedColors.map((palette) => (
          <ColorPalette
            key={palette.title}
            title={palette.title}
            colorName={palette.colorName}
            shades={palette.shades}
          />
        ))}

        {/* Exemplos de uso */}
        {showExamples && (
          <div className="mt-16 p-6 bg-white rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Exemplos de Uso</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-primary-500 text-white rounded-lg">
                <h4 className="font-semibold">Botão Primário</h4>
                <p className="text-primary-100">bg-primary-500 text-white</p>
              </div>
              <div className="p-4 bg-secondary-500 text-white rounded-lg">
                <h4 className="font-semibold">Botão Secundário</h4>
                <p className="text-secondary-100">bg-secondary-500 text-white</p>
              </div>
              <div className="p-4 bg-success-500 text-white rounded-lg">
                <h4 className="font-semibold">Sucesso</h4>
                <p className="text-success-100">bg-success-500 text-white</p>
              </div>
              <div className="p-4 bg-warning-500 text-warning-900 rounded-lg">
                <h4 className="font-semibold">Aviso</h4>
                <p className="text-warning-700">bg-warning-500 text-warning-900</p>
              </div>
              <div className="p-4 bg-danger-500 text-white rounded-lg">
                <h4 className="font-semibold">Erro</h4>
                <p className="text-danger-100">bg-danger-500 text-white</p>
              </div>
              <div className="p-4 bg-info-500 text-white rounded-lg">
                <h4 className="font-semibold">Informação</h4>
                <p className="text-info-100">bg-info-500 text-white</p>
              </div>
            </div>
          </div>
        )}

        {/* Teste de texto colorido */}
        {showTextExamples && (
          <div className="mt-8 p-6 bg-white rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Teste de Cores de Texto</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-primary-500 text-lg font-semibold">Texto Primário</p>
                <p className="text-xs text-neutral-500">text-primary-500</p>
              </div>
              <div className="text-center">
                <p className="text-secondary-500 text-lg font-semibold">Texto Secundário</p>
                <p className="text-xs text-neutral-500">text-secondary-500</p>
              </div>
              <div className="text-center">
                <p className="text-success-500 text-lg font-semibold">Texto Sucesso</p>
                <p className="text-xs text-neutral-500">text-success-500</p>
              </div>
              <div className="text-center">
                <p className="text-danger-500 text-lg font-semibold">Texto Erro</p>
                <p className="text-xs text-neutral-500">text-danger-500</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorsTemplate;
