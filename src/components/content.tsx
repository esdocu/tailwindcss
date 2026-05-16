import css from "dedent";
import { Fragment } from "react";
import { CodeExample } from "./code-example";

const screens = {
  sm: "small",
  md: "medium",
  lg: "large",
};

function startsWithVowel(string: string) {
  return ["a", "e", "i", "o", "u"].includes(string[0]);
}

function htmlSnippet({
  elementName,
  attributes,
  featuredClass,
}: {
  elementName: string;
  attributes: Record<string, string>;
  featuredClass: string;
}) {
  let parts = [`<!-- [!code classes:${featuredClass}] -->\n`];

  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  parts.push(`<${elementName} ${attributesString}`);

  if (elementName === "img" || elementName === "input") {
    parts.push(" />");
  } else if (elementName === "textarea") {
    parts.push("></textarea>");
  } else if (elementName === "iframe") {
    parts.push("></iframe>");
  } else {
    parts.push(">\n");
    parts.push(elementName === "p" ? "  Lorem ipsum dolor sit amet...\n" : "  <!-- ... -->\n");
    parts.push(`</${elementName}>`);
  }

  return parts.join("");
}

export function UsingACustomValue({
  utility,
  utilities,
  name,
  value,
  variable,
  dataType,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility?: string;
  utilities?: Array<string>;
  name?: string;
  value?: string;
  variable?: string;
  dataType?: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  let property = `--my-${variable || utility || utilities![0]}`;

  if (dataType) {
    property = `${dataType}:${property}`;
  }

  utility = utility || utilities![0];

  return (
    <>
      <p>
        {utilities ? (
          <>
            Usa utilidades como{" "}
            {utilities.map((name, index) => (
              <Fragment key={index}>
                {utilities.length > 1 && index === utilities.length - 1 ? " y " : ""}
                <code>
                  {name}-[<var>{"<value>"}</var>]
                </code>
                {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
              </Fragment>
            ))}
          </>
        ) : (
          <>
            Usa la sintaxis{" "}
            <code>
              {utility}-[<var>{"<value>"}</var>]
            </code>{" "}
          </>
        )}{" "}
        para establecer el {name || utility} basado en un valor completamente personalizado:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${utility}-[${value}] ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${utility}-[${value}]`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Para variables CSS, también puedes usar la sintaxis{" "}
        <code>
          {utility}-({dataType ? `${dataType}:` : null}
          <var>{"<custom-property>"}</var>)
        </code>{" "}
        :
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility}-(${property}) ...`,
                  ...elementAttributes,
                },
                featuredClass: `${utility}-(${property})`,
              }),
            }}
          />
        </div>
      </div>
      <p>
        Esto es solo un atajo para{" "}
        <code>
          {utility}-[{dataType ? `${dataType}:` : null}var(<var>{"<custom-property>"}</var>)]
        </code>{" "}
        que agrega la función <code>var()</code> por ti automáticamente.
      </p>
    </>
  );
}

export function ResponsiveDesign({
  property,
  properties,
  breakpoint = "md",
  defaultClass,
  featuredClass,
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  properties: Array<string>;
  breakpoint?: keyof typeof screens;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        {properties ? (
          <>
            Prefija{" "}
            {properties.map((name, index) => (
              <Fragment key={index}>
                {properties.length > 1 && index === properties.length - 1 ? " y " : ""}
                <code>{name}</code>
                {index === properties.length - 1 || properties.length < 3 ? "" : ","}
              </Fragment>
            ))}{" "}
            utilidades{" "}
          </>
        ) : (
          <>
            Prefija {startsWithVowel(property) ? "una" : "una"} utilidad <code>{property}</code>{" "}
          </>
        )}
        con una variante de breakpoint como <code>{breakpoint}:</code> para aplicar la utilidad solo en tamaños de pantalla {screens[breakpoint]}{" "}
        y superiores:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${breakpoint}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${breakpoint}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Aprende más sobre el uso de variantes en la <a href="/docs/hover-focus-and-other-states">documentación de variantes</a>.
      </p>
    </>
  );
}

export function TargetingSpecificStates({
  property,
  defaultClass,
  featuredClass,
  variant = "hover",
  element = "div",
  elementAttributes = {},
  children,
}: {
  property: string;
  variant?: string;
  defaultClass?: string;
  featuredClass: string;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Prefija {startsWithVowel(property) ? "una" : "una"} utilidad <code>{property}</code> con una variante como{" "}
        <code>{variant}:*</code> para aplicar la utilidad solo en ese estado:
      </p>
      {children || (
        <div>
          <div className="not-prose">
            <CodeExample
              example={{
                lang: "html",
                code: htmlSnippet({
                  elementName: element,
                  attributes: {
                    class: `${defaultClass} ${variant}:${featuredClass} ...`,
                    ...elementAttributes,
                  },
                  featuredClass: `${variant}:${featuredClass}`,
                }),
              }}
            />
          </div>
        </div>
      )}
      <p>
        Aprende más sobre el uso de variantes en la <a href="/docs/hover-focus-and-other-states">documentación de variantes</a>.
      </p>
    </>
  );
}

export function CustomizingYourTheme({
  utility,
  utilities,
  name,
  themeKey,
  customName,
  customValue,
  customCSS,
  includeSpacingNote = false,
  element = "div",
  elementAttributes = {},
  children,
}: {
  utility: string;
  utilities?: Array<string>;
  name: string;
  themeKey?: string;
  customName: string;
  customValue?: string;
  customCSS?: string;
  includeSpacingNote?: boolean;
  element?: string;
  elementAttributes?: Record<string, string>;
  children?: React.ReactNode;
}) {
  return (
    <>
      <p>
        Usa las variables de tema <code>--{themeKey || utility || utilities![0]}-*</code> para personalizar las utilidades {name}{" "}
        en tu proyecto:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code:
                customCSS ||
                css`
                  @theme {
                    --${themeKey || utility}-${customName}: ${customValue}; /* [!code highlight] */
                  }
                `,
            }}
          />
        </div>
      </div>
      {utilities ? (
        <p>
          Ahora utilidades como{" "}
          {utilities.map((name, index) => (
            <Fragment key={index}>
              {utilities.length > 1 && index === utilities.length - 1 ? " y " : ""}
              <code>
                {name}-{customName}
              </code>
              {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
            </Fragment>
          ))}{" "}
          pueden ser usadas en tu marcado:
        </p>
      ) : (
        <p>
          Ahora la utilidad{" "}
          <code>
            {utility}-{customName}
          </code>{" "}
          puede ser usada en tu marcado:
        </p>
      )}
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "html",
              code: htmlSnippet({
                elementName: element,
                attributes: {
                  class: `${utility || utilities![0]}-${customName}`,
                  ...elementAttributes,
                },
                featuredClass: `${utility || utilities![0]}-${customName}`,
              }),
            }}
          />
        </div>
      </div>
      {includeSpacingNote && (
        <>
          <p>
            Las utilidades{" "}
            <code>
              {utility}-<var>{"<number>"}</var>
            </code>{" "}
            son impulsadas por la variable de tema <code>--spacing</code>, la cual también puedes personalizar:
          </p>
          <div>
            <div className="not-prose">
              <CodeExample
                example={{
                  lang: "css",
                  code: css`
                    @theme {
                      --spacing: 1px; /* [!code highlight] */
                    }
                  `,
                }}
              />
            </div>
          </div>
        </>
      )}
      {children}
      {includeSpacingNote ? (
        <p>
          Aprende más sobre la personalización de la escala de espaciado en la{" "}
          <a href="/docs/theme#customizing-your-theme">documentación del tema</a>.
        </p>
      ) : (
        <p>
          Aprende más sobre la personalización de tu tema en la{" "}
          <a href="/docs/theme#customizing-your-theme">documentación del tema</a>.
        </p>
      )}
    </>
  );
}

export function CustomizingYourSpacingScale({ utility, utilities }: { utility: string; utilities: Array<string> }) {
  utilities = utilities || [utility];

  return (
    <>
      <p>
        Las utilidades{" "}
        {utilities.map((name, index) => (
          <Fragment key={index}>
            {utilities.length > 1 && index === utilities.length - 1 ? " y " : ""}
            <code>
              {name}-<var>{"<number>"}</var>
            </code>
            {index === utilities.length - 1 || utilities.length < 3 ? "" : ","}
          </Fragment>
        ))}{" "}
        son impulsadas por la variable de tema <code>--spacing</code>, la cual puede ser personalizada en tu propio tema:
      </p>
      <div>
        <div className="not-prose">
          <CodeExample
            example={{
              lang: "css",
              code: css`
                @theme {
                  --spacing: 1px; /* [!code highlight] */
                }
              `,
            }}
          />
        </div>
      </div>
      <p>
        Aprende más sobre la personalización de la escala de espaciado en la <a href="/docs/theme">documentación de variables de tema</a>.
      </p>
    </>
  );
}

export function CustomizingYourThemeColors({
  utility,
  utilities,
  element = "div",
  elementAttributes = {},
}: {
  utility: string;
  utilities?: Array<string>;
  element?: string;
  elementAttributes?: Record<string, string>;
}) {
  return (
    <CustomizingYourTheme
      themeKey="color"
      name="color"
      utility={utility}
      utilities={utilities}
      customName="regal-blue"
      customValue="#243c5a"
      element={element}
      elementAttributes={elementAttributes}
    />
  );
}
