// Temporary in-memory data
let tamilMovies = [
  { id: 1, title: "Leo", actor: "Vijay" },
  { id: 2, title: "Mangatha", actor: "Ajith" },
];

// Get all movies
export const getAllMovies = (req, res) => {
  res.status(200).json({
    message: "All Tamil movies fetched successfully",
    data: tamilMovies,
  });
};

// Get movie by ID
export const getMovieById = (req, res) => {
  const movie = tamilMovies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.status(200).json({ message: "Movie found", data: movie });
};

// Add a new movie
export const addMovie = (req, res) => {
  const { title, actor } = req.body;
  if (!title || !actor)
    return res.status(400).json({ message: "Title and actor are required" });

  const newMovie = { id: tamilMovies.length + 1, title, actor };
  tamilMovies.push(newMovie);
  res.status(201).json({ message: "Movie added", data: newMovie });
};

// Update movie
export const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, actor } = req.body;

  const movie = tamilMovies.find((m) => m.id === parseInt(id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  if (!title || !actor)
    return res.status(400).json({ message: "Title and actor are required" });

  movie.title = title;
  movie.actor = actor;
  res.status(200).json({ message: "Movie updated", data: movie });
};

// Delete movie
export const deleteMovie = (req, res) => {
  const { id } = req.params;
  tamilMovies = tamilMovies.filter((m) => m.id !== parseInt(id));
  res.status(200).json({ message: "Movie deleted successfully" });
};
