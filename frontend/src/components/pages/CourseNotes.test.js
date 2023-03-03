describe('CourseNotes', () => {
    it('renders course information', () => {
      const { getByText } = render(<CourseNotes />);
      expect(getByText(/Course Notes and Information/i)).toBeInTheDocument();
      expect(getByText(/Thermodynamics 1/i)).toBeInTheDocument();
      expect(getByText(/ME 250/i)).toBeInTheDocument();
      expect(getByText(/Roydon Fraser/i)).toBeInTheDocument();
      expect(getByText(/The engineering science of energy. The scope and limitations of thermodynamics./i)).toBeInTheDocument();
    });
  
    it('allows users to submit notes', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const notesInput = getByLabelText(/Dynamic/i);
      const submitButton = getByText(/Submit Notes/i);
  
      fireEvent.change(notesInput, { target: { value: 'This is a test note' } });
      fireEvent.click(submitButton);
  
      expect(notesInput).toHaveValue('');
    });
  
    it('updates the course name when the select input changes', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const selectInput = getByLabelText(/Class/i);
  
      fireEvent.change(selectInput, { target: { value: 'Calculus' } });
  
      expect(selectInput).toHaveValue('Calculus');
    });
  });

  describe('CourseNotes', () => {
    it('updates the course name when the select input changes', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const selectInput = getByLabelText(/Class/i);
  
      fireEvent.change(selectInput, { target: { value: 'Thermodynamics' } });
  
      expect(selectInput).toHaveValue('Thermodynamics');
    });
    it('updates the course name when the select input changes', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const selectInput = getByLabelText(/Class/i);
  
      fireEvent.change(selectInput, { target: { value: '' } });
  
      expect(selectInput).toHaveValue('');
    });
   
  it('updates user notes with any event', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const notesInput = getByLabelText(/Dynamic/i);
      fireEvent.change(notesInput, { target: { value: 'This is a test note' } });
      fireEvent.click(submitButton);
  
      expect(notesInput).toHaveValue('This is a test note');
    });
  it('updates user notes with any event', () => {
      const { getByLabelText, getByText } = render(<CourseNotes />);
      const notesInput = getByLabelText(/Dynamic/i);
      fireEvent.change(notesInput, { target: { value: '' } });
      fireEvent.click(submitButton);
  
      expect(notesInput).toHaveValue('');
    });
    });