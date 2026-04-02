import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { CallToAction } from './CallToAction';

const callToActionTag = {
  render: 'CallToAction',
  attributes: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    point1: { type: String },
    point2: { type: String },
    point3: { type: String },
    point4: { type: String },
    cta: { type: String, required: true },
    url: { type: String, required: true },
  },
};

const components = {
  CallToAction,
};

const config = {
  tags: {
    call_to_action: callToActionTag,
  },
};

export function MarkdocRenderer({ content }: { content: string }) {
  const ast = Markdoc.parse(content);
  const markdocContent = Markdoc.transform(ast, config);
  
  return (
    <div className="prose prose-invert prose-pink max-w-none prose-headings:font-aeonik prose-p:text-gray-400 prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-strong:text-white prose-blockquote:border-blue-500 prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-headings:text-white">
      {Markdoc.renderers.react(markdocContent, React, { components })}
    </div>
  );
}
