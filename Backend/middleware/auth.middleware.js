const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      redirect("/");
      return res.status(401).json({ message: "Unauthorized" });
    }

    redirect("/upload");

    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default authMiddleware;
