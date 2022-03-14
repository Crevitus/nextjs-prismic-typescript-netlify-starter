import Card from '../../../src/slices/Card';

export default {
    title: 'src/slices/Card',
};

export const _Default = () => (
    <Card
        slice={{
            variation: 'default',
            name: 'Default',
            slice_type: 'card',
            items: [],
            primary: {
                title: [
                    {
                        type: 'heading1',
                        text: 'Brand granular bandwidth',
                        spans: [],
                    },
                ],
                description: [
                    {
                        type: 'paragraph',
                        text: 'Sint incididunt amet culpa ex proident. In consectetur Lorem id ex ullamco aute tempor exercitation ad esse anim sint consectetur tempor. Nostrud sit do anim nostrud labore.',
                        spans: [],
                    },
                ],
            },
            id: '_Default',
        }}
    />
);
_Default.storyName = 'Default';
