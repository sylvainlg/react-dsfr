import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Col from '.';

it('renders Col properly', () => {
  render(
    <Col>Text</Col>,
  );
  const col = screen.getByText('Text');
  expect(col).toBeInTheDocument();
  expect(col.className).toBe('rf-col');
});

it('renders Col-n properly', () => {
  render(
    <Col n="6">Text</Col>,
  );
  const col = screen.getByText('Text');
  expect(col).toBeInTheDocument();
  expect(col.className).toBe('rf-col-6');
});

it('renders Col-n by display properly', () => {
  render(
    <Col n="xs-6">Text</Col>,
  );
  const col = screen.getByText('Text');
  expect(col).toBeInTheDocument();
  expect(col.className).toBe('rf-col-xs-6');
});

it('renders Col offset properly', () => {
  render(
    <Col offset="xs-6">Text</Col>,
  );
  const col = screen.getByText('Text');
  expect(col).toBeInTheDocument();
  expect(col.className).toContain('rf-col-offset-xs-6');
});

it('renders Col offset and n properly', () => {
  render(
    <Col n="6" offset="xs-6">Text</Col>,
  );
  const col = screen.getByText('Text');
  expect(col).toBeInTheDocument();
  expect(col.className).toContain('rf-col-offset-xs-6');
  expect(col.className).toContain('rf-col-6');
});
